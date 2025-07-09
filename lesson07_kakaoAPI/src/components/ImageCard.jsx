import React from 'react';

function ImageCard({ doc }) {
  // URL 유효성 검사 함수
  const isValidUrl = (url) => url && url.startsWith('https://');

  // 유효하지 않은 URL이면 렌더링하지 않음
  if (!isValidUrl(doc.image_url)) {
    return null;
  }

  return (
    <li>
      {/* 이미지 클릭 시 원본 이미지 또는 문서 URL로 이동 */}
      <a href={doc.doc_url || doc.image_url} target="_blank" rel="noopener noreferrer">
        <img 
          src={doc.thumbnail_url || doc.image_url} // 썸네일 URL이 있으면 사용, 없으면 이미지 URL 사용
          alt={doc.display_sitename || "이미지 결과"} 
          // 이미지 로드 실패 시 해당 이미지 숨기고 li 요소 제거
          onError={(e) => { e.target.style.display = 'none'; e.target.closest('li').remove(); }} 
        />
        {/* 사이트 이름이 있으면 표시 */}
        {doc.display_sitename && <p>{doc.display_sitename}</p>}
      </a>
    </li>
  );
}

export default ImageCard;
