import styled from 'styled-components';
import Textprop from './../Prop/Textprop';
import { Container, Row, Col } from 'react-bootstrap';
import { SectionStyled } from '../../Layouts'
import SlidersLimited from './SlidersLimited';



const Limited = () => {
    return (
        <LimitedStyled>
            <SectionStyled>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} md={8} xs={12}>
                            <div className="title-con">
                                <Textprop title={'Limited Time Deals'} parag={'A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials.'} />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <SlidersLimited />
                        </Col>
                    </Row>
                </Container>
            </SectionStyled>
        </LimitedStyled>
    )
}
//styled-styledComponents
const LimitedStyled = styled.section`
`;
export default Limited