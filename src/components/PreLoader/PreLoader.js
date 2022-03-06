import React, { useState, useEffect, useRef } from 'react';
import { Progress } from 'antd';
import './PreLoader.css';

const PreLoader = props => {
  const { setIsLoading } = props;
  const [progress, setProgress] = useState(1);
  const preloaderRef = useRef();

  useEffect(() => {
    let count = 0, timeout;    
    const id = setInterval(updateProgress, 25);

    function updateProgress() {
      count++;
      if (count > 100) {
        clearInterval(id);
        timeout = setTimeout(() => {
          preloaderRef.current.classList.add('d-none');
          setIsLoading(false);
        }, 500);
      } else {
        setProgress(count);
      }
    }

    return () => {
      clearInterval(id);
      clearTimeout(timeout);
    }
  }, [setIsLoading]);

  return (
    <div id="splash-screen" className="splash-screen" ref={preloaderRef}>
      <div className="loader-container">
        <Progress
          type="circle"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={progress}
        />
      </div>
    </div>
  );
}

export default PreLoader;