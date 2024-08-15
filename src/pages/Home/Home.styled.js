import styled from 'styled-components';

export const HomeWrapper = styled.div`
    @media (min-width: 960px) {
            display: table;
            width: 100%;
            font-size: 14px;
            line-height: 1.4;
            color: #0e1724;
    }

    .jobCard-item {
        padding: 0 24px;
        margin: 10px;
        text-align: left;
    }

    .jobCard-itemInner {
        border-bottom: 1px solid #DEDEDE;
        padding: 24px 0;
    }

    .jobCard-left {
        word-break: break-word;
        word-wrap: break-word;
        hyphens: auto;
        display: table-cell;
        padding-right: 24px;
        width: 85%;
    }

    .jobCard-right {
        text-align: left;
        display: table-cell;
        padding: 0 28px;
        width: 160px;
        vertical-align: top;
    }

    .jobCard-title {
        font-weight: 700;
        font-size: medium;
    }

`;
