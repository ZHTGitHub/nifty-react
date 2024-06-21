import InternalPaper from './Paper'
import PaperFooter from './PaperFooter'
import PaperHeader from './PaperHeader'

type InternalPaperType = typeof InternalPaper

type CompoundedComponent = InternalPaperType & {
  Footer: typeof PaperFooter;
  Header: typeof PaperHeader;
}

const Paper = InternalPaper as CompoundedComponent

Paper.Footer = PaperFooter
Paper.Header = PaperHeader

export type { ZPaperProps } from './Paper'

export default Paper