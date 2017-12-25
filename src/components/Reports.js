import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Header, Table } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  padding: 20px;
`
const Report1Row = ({ row }) => (
  <Table.Row>
    <Table.Cell>{row.show_name}</Table.Cell>
    <Table.Cell>{row.average_rating}</Table.Cell>
  </Table.Row>
)

const Report2Row = ({ row }) => (
  <Table.Row>
    <Table.Cell>{row.username}</Table.Cell>
    <Table.Cell>{row.average_rating}</Table.Cell>
    <Table.Cell>{row.rating_deviation}</Table.Cell>
    <Table.Cell>{row.rate_count}</Table.Cell>
  </Table.Row>
)

const Reports = ({ reports }) => {
  const report1 =
    reports && reports.report1 ? (
      <div>
        <Header size="medium" inverted dividing>
          Report 1{' '}
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Show Name</Table.HeaderCell>
              <Table.HeaderCell>Average Rating</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{reports.report1.map(r => <Report1Row row={r} />)}</Table.Body>
        </Table>
      </div>
    ) : null

  const report2 =
    reports && reports.report2 ? (
      <div>
        {' '}
        <Header size="medium" inverted dividing>
          Report 2{' '}
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Average Rating</Table.HeaderCell>
              <Table.HeaderCell>Rating Deviation</Table.HeaderCell>
              <Table.HeaderCell>Rate Count</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{reports.report2.map(r => <Report2Row row={r} />)}</Table.Body>
        </Table>
      </div>
    ) : null

  return reports ? (
    <Container>
      {report1}
      {report2}
    </Container>
  ) : null
}

Reports.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  reports: PropTypes.any,
}

Reports.defaultProps = {
  reports: null,
}

export default pure(Reports)
