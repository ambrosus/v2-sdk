import { Percent } from '@airdao/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x31A65bade6593B4fab076c6b16c338182abcC8b7'

export const INIT_CODE_HASH = '0x0bb23e27e38d82e8f62fcca75da5a51c07f86abce63a1c0673a8e1a0cbd40fbe'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
