import * as React from 'react';
import styled from 'styled-components';

import useDataApi from '../hooks/useDataApi';
import { formatNumber, formatDate } from '../utils';
import Card from './Card';
import Error from './Error';
import { mediaQuery } from '../themes';
import { IStatsResponse } from '../types';
import Row from './Row';

const StatSection = styled.section`
  display: block;
`;

const StatHeading = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StatTitle = styled.h2`
  color: inherit;
  margin-bottom: 0.2rem;
  ${mediaQuery.tablet} {
    font-size: 1.3em;
  }
`;

const StatSubtitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.primary};
`;

interface StatProps {
  url: string;
  title?: string;
}

const Stats: React.FC<StatProps> = ({ url, title }) => {
  const [{ data, isLoading, isError }] = useDataApi<IStatsResponse>({
    initUrl: url,
    defaultData: {},
  });

  return (
    <StatSection className="center-text">
      {isError ? (
        <Row>
          <Error message="No Data Available" />
        </Row>
      ) : (
        <>
          <StatHeading>
            {title && <StatTitle>{title}</StatTitle>}
            <StatSubtitle>
              Last updated: {data?.lastUpdate && formatDate(data.lastUpdate)}
            </StatSubtitle>
          </StatHeading>
          <Row>
            {data && (
              <>
                <Card info="warning" loading={isLoading}>
                  <h2>
                    {data.confirmed && formatNumber(data.confirmed.value)}
                  </h2>
                  <h4>Confirmed</h4>
                </Card>
                <Card info="danger" loading={isLoading}>
                  <h2>{data.deaths && formatNumber(data.deaths.value)}</h2>
                  <h4>Deaths</h4>
                </Card>
                <Card info="success" loading={isLoading}>
                  <h2>
                    {data.recovered && formatNumber(data.recovered.value)}
                  </h2>
                  <h4>Recovered</h4>
                </Card>
              </>
            )}
          </Row>
        </>
      )}
    </StatSection>
  );
};

export default Stats;
