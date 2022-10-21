import { CrowdJob } from '../../utils/jobTypes'
import devtoCoordinator from './devtoCoordinator'
import twitterCoordinator from './twitterCoordinator'
import twitterReachCoordinator from './twitterReachCoordinator'
import discordCoordinator from './discordCoordinator'
import slackCoordinator from './slackCoordinator'
import weeklyAnalyticsEmailsCoordinator from './weeklyAnalyticsEmailsCoordinator'
import checkMemberScoresCoordinator from './checkMemberScoresCoordinator'
import checkMembersToMergeCoordinator from './checkMembersToMergeCoordinator'
import checkSqsQueues from './checkSqsQueues'

const jobs: CrowdJob[] = [
  devtoCoordinator,
  twitterCoordinator,
  twitterReachCoordinator,
  discordCoordinator,
  slackCoordinator,
  weeklyAnalyticsEmailsCoordinator,
  checkMemberScoresCoordinator,
  checkMembersToMergeCoordinator,
  checkSqsQueues,
]

export default jobs