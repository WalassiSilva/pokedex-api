import styled from "styled-components"

export const Select = styled.select`
        padding: 5px;
        border-radius: 5px;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.color};
`;