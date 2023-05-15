import arrowBack from '../../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../../constants'

import { StyledArrowImg, StyledBackToCardLink } from './styles'

export const BackToCardsButton = () => {
  return (
    <StyledBackToCardLink to={MAIN_PATH.Cards}>
      <StyledArrowImg src={arrowBack} alt="arrow-back" />
      Go to Packs List
    </StyledBackToCardLink>
  )
}
