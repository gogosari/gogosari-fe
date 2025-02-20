export const challenges = [
  {
    subtitle: '다들 고사리,',
    title: '얼마나 따봔?',
    users: 18,
    likes: 29,
    percent: 60,
    image: '/images/challenge-1.png',
  },
  {
    subtitle: '다들 고사리,',
    title: '얼마나 팔안?',
    users: 33,
    likes: 64,
    percent: 90,
    image: '/images/challenge-2.png',
  },
  {
    subtitle: '다들 고사리 따러,',
    title: '얼마나 걸어봔?',
    users: 21,
    likes: 17,
    percent: 20,
    image: '/images/challenge-3.png',
  },
  {
    subtitle: '내 고사리가',
    title: '가장 길주게~',
    users: 42,
    likes: 21,
    percent: 40,
    image: '/images/challenge-4.png',
  },
]

export type ChallengeModel = (typeof challenges)[number]
