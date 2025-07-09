import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, searchType, setSearchType, onSearch }) {
  // Enter 키 입력 시 검색 함수 호출
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div id="searchForm">
      {/* 검색 타입 선택 (이미지/비디오) */}
      <select 
        id="searchType" 
        style={{ fontSize: '16px', padding: '6px' }}
        value={searchType} // React의 제어 컴포넌트
        onChange={(e) => setSearchType(e.target.value)} // 상태 업데이트
      >
        <option value="image">이미지</option>
        <option value="vclip">비디오</option>
      </select>
      {/* 검색어 입력 필드 */}
      <input
        type="text"
        id="searchInput"
        placeholder="검색어를 입력하세요"
        value={searchQuery} // React의 제어 컴포넌트
        onChange={(e) => setSearchQuery(e.target.value)} // 상태 업데이트
        onKeyDown={handleKeyDown} // Enter 키 이벤트 처리
      />
      {/* 검색 버튼 */}
      <button onClick={onSearch}>검색</button>
    </div>
  );
}

export default SearchBar;
