import { withAllHocs, withBase, withBaseGlobal } from './hocs';

export default withAllHocs(withBaseGlobal(withBase(HTMLElement)));
