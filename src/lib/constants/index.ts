import type { FollowSortType } from '#/types/requests'
import type { ProfileTableTitleType, ProfileTabType } from '#/types/common'

import FireEmoji from 'public/assets/icons/fire.svg'
import EyesEmoji from 'public/assets/icons/eyes.svg'
import GithubIcon from 'public/assets/icons/github.svg'
import DiscordIcon from 'public/assets/icons/discord.svg'
import TwitterIcon from 'public/assets/icons/twitter.svg'
import HuggingEmoji from 'public/assets/icons/hugging.svg'
import TelegramIcon from 'public/assets/icons/telegram.svg'
import ChinaFlag from 'public/assets/icons/flags/china.svg'
import SpainFlag from 'public/assets/icons/flags/spain.svg'
import StarEyesEmoji from 'public/assets/icons/star-eyes.svg'
import EtherscanIcon from 'public/assets/icons/etherscan.svg'
import FranceFLag from 'public/assets/icons/flags/france.svg'
import PirateFlagEmoji from 'public/assets/icons/pirate-flag.svg'
import SloveniaFlag from 'public/assets/icons/flags/slovenia.svg'
import USAFlag from 'public/assets/icons/flags/united-states.svg'
import GithubIconLight from 'public/assets/icons/github-white.svg'
import EtherscanIconLight from 'public/assets/icons/etherscan-light.svg'

export const APP_NAME = 'Ethereum Follow Protocol'
export const APP_NAME_SHORT = 'EFP'
export const APP_DESCRIPTION =
  'A native Ethereum protocol for following and tagging Ethereum accounts.'
export const APP_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4321'

export const ENS_SUBGRAPH_URL = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.NEXT_PUBLIC_ENS_SUBGRAPH_API_KEY}/subgraphs/id/5XqPmWe6gjyrJtFn9cLy237i4cWw2j9HcUJEXsP5qGtH`

export const FETCH_LIMIT_PARAM = 12
export const LEADERBOARD_FETCH_LIMIT_PARAM = 60
export const LEADERBOARD_CHUNK_SIZE = 20

export const SECOND = 1_000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const WEEK = 7 * DAY

export const PROFILE_TABS: ProfileTabType[] = ['following', 'followers']
export const BLOCKED_MUTED_TABS: ProfileTableTitleType[] = ['Blocked/Muted', 'Blocked/Muted By']

export const LANGUAGES = [
  { language: 'English', key: 'english', icon: USAFlag },
  { language: 'Slovenščina', key: 'slovenian', icon: SloveniaFlag },
  { language: '简体中文', key: 'chinese', icon: ChinaFlag },
  { language: 'Français', key: 'french', icon: FranceFLag },
  { language: 'Español', key: 'spanish', icon: SpainFlag }
]

export const DEFAULT_TAGS_TO_ADD = ['irl', 'bff', 'based', 'degen', 'top8']
export const DEFAULT_TAGS = ['no tag']
export const BLOCKED_MUTED_TAGS = ['block', 'mute']
export const SORT_OPTIONS: FollowSortType[] = ['follower count', 'latest first', 'earliest first']

export const NAV_ITEMS = [
  {
    href: () => '/',
    emoji: '🏠',
    name: 'home',
    private: false
  },
  {
    href: (url?: string) => `/${url ?? 'profile'}`,
    emoji: '👤',
    name: 'profile',
    private: true
  },
  {
    href: () => '/leaderboard',
    emoji: '🏆',
    name: 'leaderboard',
    private: false
  }
]

export const leaderboardFilters = ['mutuals', 'followers', 'following', 'top8', 'blocked'] as const
export const leaderboardFiltersEmojies = [
  HuggingEmoji,
  StarEyesEmoji,
  EyesEmoji,
  FireEmoji,
  PirateFlagEmoji
] as const

export const profileCardSocials = [
  {
    name: 'etherscan',
    url: (address: string) => `https://etherscan.io/address/${address}`,
    icon: (theme: string) => (theme === 'dark' ? EtherscanIconLight : EtherscanIcon)
  },
  {
    name: 'com.twitter',
    url: (username: string) => `https://twitter.com/${username}`,
    icon: (theme: string) => (theme === 'dark' ? TwitterIcon : TwitterIcon)
  },
  {
    name: 'com.github',
    url: (username: string) => `https://github.com/${username}`,
    icon: (theme: string) => (theme === 'dark' ? GithubIconLight : GithubIcon)
  },
  {
    name: 'org.telegram',
    url: (username: string) => `https://t.me/${username}`,
    icon: (theme: string) => (theme === 'dark' ? TelegramIcon : TelegramIcon)
  },
  {
    name: 'com.discord',
    url: (username: string) => `https://discord.com/users/${username}`,
    icon: (theme: string) => (theme === 'dark' ? DiscordIcon : DiscordIcon)
  }
] as const
