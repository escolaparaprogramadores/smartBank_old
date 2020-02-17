import React from 'react';
import { Container } from './styles';
import EntrySummaryChart from './EntrySummaryChart/index';
import EntrySummaryList from './EntrySummaryList/index';

export default function EntrySummary() {
    return (
        <Container>
            <EntrySummaryChart />
            <EntrySummaryList />
        </Container>
    );
}
