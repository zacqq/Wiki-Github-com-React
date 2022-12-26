import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
    };

    a.verRepo {
        color: #80d8ff;

        &:hover {
            opacity: 0.6;
        };
    }

    a.remover {

        color: #FF0000;
        margin-top: 10px;


        &:hover {
            opacity: 0.6;
        };

    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`