import { challenges } from '../challenges'
import RankingChallengeItem from './challenge-item'

export default function RankingChallengeSection() {
  return (
    <section>
      <h2 className="mt-6 mb-1.5 text-lg font-bold">고사리 채집왕 챌린지</h2>

      <ul className="flex flex-col gap-2">
        {challenges.map((challenge) => (
          <RankingChallengeItem key={challenge.title} challenge={challenge} />
        ))}
      </ul>
    </section>
  )
}
