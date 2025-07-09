import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import './App.scss'; 

// 여기에 발급받은 카카오 REST API 키를 넣어주세요.
// 이 키는 클라이언트(브라우저)에서 직접 사용되므로, 보안에 유의해야 합니다.
// 실제 서비스에서는 서버에서 API 호출을 대리하는 것이 더 안전합니다.
const REST_API_KEY = '15c2ffaa072b84d4c98f6da83860def2'; 

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('image');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const loaderRef = useRef(null); 

  // 검색 결과를 가져오는 비동기 함수
  const fetchResults = async (query, type, currentPage) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    const url = type === 'image'
      ? `https://dapi.kakao.com/v2/search/image?query=${encodeURIComponent(query)}&page=${currentPage}&size=20`
      : `https://dapi.kakao.com/v2/search/vclip?query=${encodeURIComponent(query)}&page=${currentPage}&size=20`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
      }

      const data = await response.json();
      
      // 새 검색(currentPage === 1)일 경우 결과를 덮어쓰고, 아니면 기존 결과에 추가
      setSearchResults(prevResults => 
        currentPage === 1 ? data.documents : [...prevResults, ...data.documents]
      );
      setIsLastPage(data.meta.is_end);

    } catch (err) {
      setError(`에러 발생: ${err.message}`);
      console.error('에러 발생:', err);
    } finally {
      setLoading(false);
    }
  };

  // 검색 버튼 클릭 또는 Enter 키 입력 시 호출될 함수
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("검색어를 입력하세요!"); 
      return;
    }
    setPage(1); // 새 검색 시 페이지를 1로 초기화
    fetchResults(searchQuery, searchType, 1); // 첫 페이지 검색
  };

  // 무한 스크롤 구현을 위한 Intersection Observer 설정
  useEffect(() => {
    const currentLoaderRef = loaderRef.current; // 클린업 함수를 위해 ref 값을 변수에 저장
    const observer = new IntersectionObserver((entries) => {
      // 로더 요소가 뷰포트에 들어오고, 로딩 중이 아니며, 마지막 페이지가 아닐 때 다음 페이지 로드
      if (entries[0].isIntersecting && !loading && !isLastPage) {
        setPage(prevPage => prevPage + 1);
      }
    }, { threshold: 1.0 }); // 로더 요소가 100% 보일 때 트리거

    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (currentLoaderRef) { // 저장된 변수를 사용하여 unobserve
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [loading, isLastPage]); // loading, isLastPage 상태가 변경될 때마다 옵저버 재설정

  // page 상태가 변경될 때마다 (즉, 무한 스크롤로 다음 페이지 요청 시) 검색 결과 추가 로드
  useEffect(() => {
    if (page > 1) { // 첫 페이지는 handleSearch에서 이미 로드했으므로 page가 1보다 클 때만 실행
      fetchResults(searchQuery, searchType, page);
    }
  }, [page, searchQuery, searchType]); // searchQuery와 searchType을 의존성 배열에 추가

  return (
    <div id="appContainer">
      {/* 배너 섹션 */}
      <div id="banner">
        {/* public 폴더에 이미지 저장: public/images/kakao.webp */}
        <img src="/images/kakao.webp" alt="Kakao 검색 배너" /> 
        <div className="overlay">
          <h2>카카오 이미지 & 비디오 검색기</h2>
          <p>빠르고 정확한 검색을 경험하세요!</p>
        </div>
      </div>

      <h1>Kakao 이미지 & 비디오 검색</h1>

      {/* 검색 바 컴포넌트 */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        onSearch={handleSearch}
      />

      {/* 로딩 인디케이터 */}
      {loading && (page === 1 ? <div id="loader">검색 중...</div> : <div id="loader">더 많은 결과 로드 중...</div>)}
      
      {/* 에러 메시지 */}
      {error && <div className="error-message">{error}</div>}
      
      {/* 검색 결과 목록 컴포넌트 */}
      <ResultList results={searchResults} searchType={searchType} />

      {/* 무한 스크롤 트리거 및 메시지 */}
      {!isLastPage && !loading && searchResults.length > 0 && (
        <div ref={loaderRef} style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
          스크롤하여 더 많은 결과 보기...
        </div>
      )}
      {isLastPage && searchResults.length > 0 && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
          모든 결과를 불러왔습니다.
        </div>
      )}
      {/* 검색 결과가 없을 때 메시지 (로딩 중이 아니고 에러도 없으며 검색어가 있을 때) */}
      {searchResults.length === 0 && !loading && !error && searchQuery.trim() !== '' && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
