import styled from "styled-components";
import { colors } from "../../styles/tokey/colors";

export const Container=styled.div` 
margin-top: 4rem;
    
    table{
        width: 100%;
        border-spacing:0 0.5rem;

        th{
            color:${colors.textBody};
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

        }

        td{
            padding:1rem 2rem;
            border:0;
            background: ${colors.shape};
            color:${colors.textBody};
            border-radius: 0.25rem;
            &:first-child{
                color: ${colors.textTitle};

            }
            &.deposit{
                color:${colors.green};
            }
            &.withdraw{
                color:${colors.red};
               
            }

        }
    }


`