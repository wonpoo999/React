import React from "react";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f8d7da",
        border: "1px solid #f5c6cb",
        borderRadius: "4px",
        color: "#721c24",
        margin: "10px 0",
        textAlign: "center",
      }}
    >
      <p style={{ margin: "0 0 10px 0" }}>⚠️ {message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "6px 12px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          다시 시도
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;