import type { WengineKey } from '@genshin-optimizer/zzz/consts'
import { getWengineParams } from '../../../wengine'

const key: WengineKey = 'ReelProjector'
const data_gen = getWengineParams(key)

let o = 0

const dm = {
  hpThresh: data_gen[o++][0],
  dmgReduc: data_gen[o++],
  miasmaReduc: data_gen[o++],
} as const

export default dm
