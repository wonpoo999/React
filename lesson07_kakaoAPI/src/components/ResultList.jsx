import React from 'react';
import ImageCard from './ImageCard';
import VideoCard from './VideoCard'; // 경로 수정: VideoCard는 components 폴더 바로 아래에 있음

function ResultList({ results, searchType }) {
  // 결과가 없거나 비어있으면 아무것도 렌더링하지 않음
  if (!results || results.length === 0) {
    return null; 
  }

  return (
    <div id="root">
      <ul id="resultList">
        {/* 검색 타입에 따라 ImageCard 또는 VideoCard 렌더링 */}
        {results.map((doc, index) => (
          searchType === 'image' ? (
            // 이미지 결과: 고유한 key prop 사용 (image_url과 index 조합)
            <ImageCard key={doc.image_url + index} doc={doc} />
          ) : (
            // 비디오 결과: 고유한 key prop 사용 (url과 index 조합)
            <VideoCard key={doc.url + index} doc={doc} />
          )
        ))}
      </ul>
    </div>
  );
}

export default ResultList;