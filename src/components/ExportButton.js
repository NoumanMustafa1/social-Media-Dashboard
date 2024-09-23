import React from 'react';
import { Button } from '@mui/material';
import { exportAnalytics } from '../services/api';
import DownloadIcon from '@mui/icons-material/Download';

const ExportButton = () => {
  const handleExport = async () => {
    try {
      const data = await exportAnalytics();
      // Create a Blob from the data
      const blob = new Blob([data], { type: 'application/octet-stream' });
      // Create a link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'analytics_report.xlsx'; // Change file name and extension as needed
      link.click();
      // Cleanup
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      // Handle error (e.g., show notification)
      console.error('Export failed:', error);
    }
  };

  return (
    <Button variant="contained" color="primary" startIcon={<DownloadIcon />} onClick={handleExport}>
      Export Report
    </Button>
  );
};

export default ExportButton;
