import { createModuleLoader } from '../../factory/mdule.factory'
import dashboard from '../../modules/dashboard'

const moduleLoader = createModuleLoader([dashboard])

export default moduleLoader
