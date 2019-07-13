import React from 'react';
import styled from "styled-components";

const CenterContent = ({children, style}) =>
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', ...style}}>{children}</div>
export default CenterContent;
