import React from 'react';
import {StyledSection, SectionTitle, SectionContent, Span} from './styled';
class Section extends React.Component {
    render() {
        const {title, children, id, bgColor, textColor} = this.props
        return (
            <StyledSection id={id} bgColor={bgColor} textColor={textColor}>
                <SectionTitle>{title}
                    {this.props.showAnimation ? 
                    <Span></Span> : "" }
                </SectionTitle>
                <SectionContent>
                    {children} 
                </SectionContent>
            </StyledSection>
        );
    }
}
export default Section;