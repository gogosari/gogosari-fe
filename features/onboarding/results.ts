import { BUG_4, EXPERIENCE_4, SHAPE_2, TOGETHER_1, TOGETHER_4 } from './constants'

interface ResultModel {
  title: string
  subtitle: string
  type: string[]
  image: string
}

export type ResultsType = Record<'gosary' | 'explorer' | 'beginner', ResultModel>

export const results: ResultsType = {
  gosary: {
    title: '당신은 고사리 그 자체이우다',
    subtitle: '혹시..고사리만 캐러 다니시는거 아니우꽈?',
    type: ['마구잡이형', '강함', '강함', '높음'],
    image: '/images/gosary.png',
  },
  explorer: {
    title: '당신은 고사리 탐험가이우다',
    subtitle: '당신은 고사리 채집계의 프로 탐험가',
    type: ['속전속결형', '높음', '강함', '높음'],
    image: '/images/explorer.png',
  },
  beginner: {
    title: '당신은 초짜겐 마씸?',
    subtitle: '당신은 고사리 채집계의 왕초보!',
    type: ['안전형', '보통', '낮음', '낮음'],
    image: '/images/beginner.png',
  },
}

export const getResultType = ({
  experience,
  together,
  bug,
  shape,
}: {
  experience: string
  together: string
  bug: string
  shape: string
}) => {
  if (
    experience === EXPERIENCE_4 &&
    together === TOGETHER_1 &&
    bug === BUG_4 &&
    shape === SHAPE_2
  ) {
    return 'gosary'
  } else if (
    experience === EXPERIENCE_4 &&
    together === TOGETHER_4 &&
    bug === BUG_4 &&
    shape === SHAPE_2
  ) {
    return 'explorer'
  }

  return 'beginner'
}
