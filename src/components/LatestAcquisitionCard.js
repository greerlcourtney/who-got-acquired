import React from 'react';
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

function LatestAcquisitionCard() {
  const acquisitionData = {
    companyName: 'TechCorp',
    dealAmount: '$500M',
    acquirerName: 'BigTech Inc.',
    announcementDate: 'January 1, 2024',
    acquireeIndustry: 'Software',
    acquirerIndustry: 'Technology',
    acquireeFundingAmount: '$200M',
    acquireeFundingLastRound: 'Series D',
  };

  return (
    <Box textAlign="center" p={2}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" pb={18} gutterBottom>
            {acquisitionData.companyName}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Deal Amount</TableCell>
                  <TableCell>{acquisitionData.dealAmount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acquirer Name</TableCell>
                  <TableCell>{acquisitionData.acquirerName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Announcement Date</TableCell>
                  <TableCell>{acquisitionData.announcementDate}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acquiree Industry</TableCell>
                  <TableCell>{acquisitionData.acquireeIndustry}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acquirer Industry</TableCell>
                  <TableCell>{acquisitionData.acquirerIndustry}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acquiree Funding Amount</TableCell>
                  <TableCell>{acquisitionData.acquireeFundingAmount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acquiree Funding Last Round</TableCell>
                  <TableCell>{acquisitionData.acquireeFundingLastRound}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LatestAcquisitionCard;