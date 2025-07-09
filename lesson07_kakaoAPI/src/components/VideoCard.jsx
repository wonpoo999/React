import React from 'react';

function VideoCard({ doc }) {
  // URL 유효성 검사 함수
  const isValidUrl = (url) => url && url.startsWith('https://');

  // 유효하지 않은 썸네일 URL이면 렌더링하지 않음
  if (!isValidUrl(doc.thumbnail)) {
    return null;
  }

  // 재생 시간을 분:초 형식으로 변환
  const minutes = Math.floor(doc.play_time / 60);
  const seconds = String(doc.play_time % 60).padStart(2, '0');
  const timeStr = `${minutes}:${seconds}`;

  return (
    <li>
      {/* 비디오 클릭 시 해당 비디오 URL로 이동 */}
      <a href={doc.url} target="_blank" rel="noopener noreferrer">
        <div className="thumbnail-container">
          <img 
            src={doc.thumbnail} 
            alt={doc.title} 
            // 이미지 로드 실패 시 해당 이미지 숨기고 li 요소 제거
            onError={(e) => { e.target.style.display = 'none'; e.target.closest('li').remove(); }} 
          />
          {/* 재생 시간 표시 */}
          <span className="play-time">{timeStr}</span>
        </div>
        {/* 비디오 제목 */}
        <p className="video-title">{doc.title}</p>
        {/* 비디오 작성자 */}
        <p className="author">{doc.author}</p>
      </a>
    </li>
  );
}

export default VideoCard;
