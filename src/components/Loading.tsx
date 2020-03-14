import * as React from 'react';
import styled from 'styled-components';

interface LoadingProps {
  text?: string;
  speed?: number;
}

const LoaderContainer = styled.span`
  font-weight: 600;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20px;
  text-align: center;
`;

const Loading: React.FC<LoadingProps> = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const itvlId = window.setInterval(() => {
      setContent(content => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(itvlId);
  }, [text, speed]);

  return <LoaderContainer>{content}</LoaderContainer>;
};

export default Loading;
