import { Typography, TextField, Box, Container } from '@mui/material';
import { useState, useRef } from 'react';

import BoxOutlinedGradient from '@/components/common/ui/box/BoxOutlinedGradient';
import BoxOutlinedRounded from '@/components/common/ui/box/BoxOutlinedRounded';
import UnderbarToggleButtonGroup, {
  ContentType,
} from '@/components/common/ui/button/ToggleButtons/UnderbarToggleButtonGroup';
import {
  ContentDonateHistory,
  ContentOwnNFT,
  ContentPersonalInfo,
} from '@/pages/MyPage/Contents';

import { InnerBoxLeft, StyledBox, StyledBoxOutlined } from '..';

export const OtherComponents = () => {
  const [content, setContent] = useState<ContentType>('donationHistory');
  const [showContent, setShowContent] = useState(true);

  type ContentData = {
    [key in ContentType]: {
      label: string;
      component: JSX.Element;
    };
  };

  const contentsData: ContentData = {
    donationHistory: {
      label: '기부 이력',
      component: <ContentDonateHistory />,
    },
    NFT: {
      label: 'NFT',
      component: <ContentOwnNFT />,
    },
    personalInfo: {
      label: '개인정보',
      component: <ContentPersonalInfo />,
    },
  };

  const handleChangeContent = (value: ContentType) => {
    setShowContent(false);
    setTimeout(() => {
      setContent(value);
      setShowContent(true);
    }, 150);
  };

  const refs: Record<ContentType, React.RefObject<HTMLButtonElement>> = {
    donationHistory: useRef(null),
    NFT: useRef(null),
    personalInfo: useRef(null),
  };

  return (
    <StyledBox sx={{ marginBottom: '150px' }}>
      <Typography variant="h2">Custom Components</Typography>
      <Typography sx={{ textAlign: 'center' }}></Typography>

      <StyledBox>
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">Custom Boxes</Typography>
        <Typography sx={{ textAlign: 'center' }}>
          [BoxOutlinedGradient, BoxOutlinedRounded]
          <br />
          <br />
          Mui Box를 이용해 만든 기본적인 커스텀 박스입니다. <br />
          padding 20% 기본 적용, 보더 스타일 커스텀 외 큰 의미는 없습니다.
        </Typography>
        <StyledBoxOutlined>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '30%',
              marginRight: '10%',
            }}
          >
            <BoxOutlinedGradient />
            <BoxOutlinedGradient sx={{ backgroundColor: 'red' }} />
            <br />
            <BoxOutlinedRounded />
            <BoxOutlinedRounded sx={{ borderColor: 'red' }} />
          </Box>
          <Box sx={{ width: '70%', marginLeft: '2rem' }}>
            <Typography>
              Omit 등을 이용하여 커스텀한 컴포넌트로, sx를 내려주어 직접 스타일
              오버라이드하여 사용하실 수 있습니다.
              <br />
              <br />
            </Typography>
            <Typography color="primary">{`<BoxOutlinedGradient />
            `}</Typography>
            <Typography color="primary">{`<BoxOutlinedGradient sx={{ backgroundColor: 'red' }} />
            `}</Typography>
            <br />
            <br />
            <Typography color="primary">{`<BoxOutlinedRounded />`}</Typography>
            <Typography color="primary">{`<BoxOutlinedGradient sx={{ borderColor: 'red' }} />
            `}</Typography>
          </Box>
        </StyledBoxOutlined>
      </StyledBox>

      <StyledBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="subtitle1">UnderbarToggleButtonGroup</Typography>
        <br />
        <Typography sx={{ textAlign: 'center' }}>
          컨텐츠 갯수, 내용 확장성을 고려해 구현한 토글 버튼 그룹입니다. <br />
          사용법은 mypage 측 예시활용 및, UnderbarToggleButton 구현체를
          참고해주세요.
        </Typography>
        <br />
        <br />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ marginY: '10px' }}>
            <UnderbarToggleButtonGroup
              buttons={Object.keys(contentsData).map((value) => ({
                value,
                label: contentsData[value].label,
              }))}
              refs={refs}
              selectedValue={content}
              onChange={handleChangeContent}
            />
          </Box>
          <Container
            maxWidth="md"
            sx={{
              paddingTop: '20px',
              minHeight: '500px',
              width: '100%',
            }}
          >
            <Box
              sx={{
                opacity: showContent ? 1 : 0,
                transition: 'opacity 150ms ease-in-out',
              }}
            >
              {contentsData[content].component}
            </Box>
          </Container>
        </Box>
      </StyledBox>
    </StyledBox>
  );
};
