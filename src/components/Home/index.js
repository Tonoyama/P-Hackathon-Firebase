import React from 'react';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';

const { Chart } = require("react-google-charts");

const HomePage = () => (
  <div>
    <h1>入退室人数（日別）</h1>
    <Chart
  width={'500px'}
  height={'300px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1-0vUfi334esqOtoEy5BoiW4mTz7DHOfOsKsQGB5LKGU/edit#gid=0"

  options={{
    title: '入退室人数（日別）'
  }}
  rootProps={{ 'data-testid': '4' }}
/>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
