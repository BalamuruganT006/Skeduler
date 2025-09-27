import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Mock timetable data (same as in Timetable component)
const timetableData = {
  'III_SEM_A': {
    periods: [
      ['DMS (Mr. T. Bhaskar)', 'JP (Mrs. M. K. Nivodhini)', 'OS (Mrs. E. Baby Anitha)', 'COA (Ms. U. Kasthuri)', 'OS (Mrs. E. Baby Anitha)', 'Library Hour (Ms. P. Priyadharshini)'],
      ['JP (Mrs. M. K. Nivodhini)', 'COA (Ms. U. Kasthuri)', 'JP_Lab (Mrs. M. K. Nivodhini [M], Mr. P. Vasuki [A])', 'DS_Lab (Ms. M. Jayanthi [M], Dr. S. Savitha [A])', 'OS (Mrs. E. Baby Anitha)', 'JP (Mrs. M. K. Nivodhini)'],
      ['DS (Mr. M. Azhagesan)', 'OS (Mrs. E. Baby Anitha)', 'JP_Lab (Mrs. M. K. Nivodhini [M], Mr. P. Vasuki [A])', 'DS_Lab (Ms. M. Jayanthi [M], Dr. S. Savitha [A])', 'SSD-III (Dr. S. Vadivel)', 'SSD-III (Dr. S. Vadivel)'],
      ['COA (Ms. U. Kasthuri)', 'DMS (Mr. T. Bhaskar)', 'JP_Lab (Mrs. M. K. Nivodhini [M], Mr. P. Vasuki [A])', 'DS_Lab (Ms. M. Jayanthi [M], Dr. S. Savitha [A])', 'JP (Mrs. M. K. Nivodhini)', 'DS (Mr. M. Azhagesan)'],
      ['MH (Dr. M. Venkatesan)', 'OS_Lab (Mrs. J. NirmalaGandhi [M], Mrs. S. Vinothini [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Mr. O.K. Gowrishankar [A])', 'JP (Mrs. M. K. Nivodhini)', 'DS (Mr. M. Azhagesan)', 'COA (Ms. U. Kasthuri)'],
      ['DS (Mr. M. Azhagesan)', 'OS_Lab (Mrs. J. NirmalaGandhi [M], Mrs. S. Vinothini [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Mr. O.K. Gowrishankar [A])', 'DMS (Mr. T. Bhaskar)', 'COA (Ms. U. Kasthuri)', 'OS (Mrs. E. Baby Anitha)'],
      ['SSD-III (Dr. S. Vadivel)', 'OS_Lab (Mrs. J. NirmalaGandhi [M], Mrs. S. Vinothini [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Mr. O.K. Gowrishankar [A])', 'DS (Mr. M. Azhagesan)', 'DMS (Mr. T. Bhaskar)', 'DMS (Mr. T. Bhaskar)']
    ]
  },
  'III_SEM_B': {
    periods: [
      ['SSD-III (Mr. M. Namasivayam)', 'OS (Mr. V. Ramesh)', 'DS (Ms. M. Jayanthi)', 'DS (Ms. M. Jayanthi)', 'JP (Ms. R. Keerthana)', 'DS (Ms. M. Jayanthi)'],
      ['DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'DMS (Mr. T. Bhaskar)', 'OS (Mr. V. Ramesh)', 'COA (Dr. S. Vadivel)', 'OS (Mr. V. Ramesh)', 'JP (Ms. R. Keerthana)'],
      ['DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'DS (Ms. M. Jayanthi)', 'DMS (Mr. T. Bhaskar)', 'COA (Dr. S. Vadivel)', 'DMS (Mr. T. Bhaskar)', 'SSD-III (Mr. M. Namasivayam)'],
      ['DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'JP (Ms. R. Keerthana)', 'JP (Ms. R. Keerthana)', 'COA (Dr. S. Vadivel)', 'COA (Dr. S. Vadivel)', 'MH (Dr. M. Venkatesan)'],
      ['OS_Lab (Mrs. S. Vinothini [M], Mrs. E. Baby Anitha [A])', 'DST_Lab (Ms. P. Priyadharshini [M], Mr. S. Ajithkumar [A])', 'JP_Lab (Mr. M. Naveenkumar [M], Mr. P. Vasuki [A])', 'DMS (Mr. T. Bhaskar)', 'Library Hour (Mr. Rasagopal)', 'DMS (Mr. T. Bhaskar)'],
      ['OS_Lab (Mrs. S. Vinothini [M], Mrs. E. Baby Anitha [A])', 'DST_Lab (Ms. P. Priyadharshini [M], Mr. S. Ajithkumar [A])', 'JP_Lab (Mr. M. Naveenkumar [M], Mr. P. Vasuki [A])', 'JP (Ms. R. Keerthana)', 'SSD-III (Mr. M. Namasivayam)', 'OS (Mr. V. Ramesh)'],
      ['OS_Lab (Mrs. S. Vinothini [M], Mrs. E. Baby Anitha [A])', 'DST_Lab (Ms. P. Priyadharshini [M], Mr. S. Ajithkumar [A])', 'JP_Lab (Mr. M. Naveenkumar [M], Mr. P. Vasuki [A])', 'OS (Mr. V. Ramesh)', 'DS (Ms. M. Jayanthi)', 'COA (Dr. S. Vadivel)']
    ]
  },
  'III_SEM_C': {
    periods: [
      ['JP (Ms. R. Keerthana)', 'DMS (Mr. Natarajan)', 'DMS (Mr. Natarajan)', 'JP (Ms. R. Keerthana)', 'DMS (Mr. Natarajan)', 'COA (Mr. M. Naveenkumar)'],
      ['DS (Mr. B. Rajesh)', 'DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'COA (Mr. M. Naveenkumar)', 'JP_Lab (Dr. N. Mahendran [M], Mr. P. Vasuki [A])', 'DS (Mr. B. Rajesh)', 'SSD-III (Dr. S. Vadivel)'],
      ['OS (Mr. V. Ramesh)', 'DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'MH (Dr. M. Venkatesan)', 'JP_Lab (Dr. N. Mahendran [M], Mr. P. Vasuki [A])', 'OS (Mr. V. Ramesh)', 'DMS (Mr. Natarajan)'],
      ['COA (Mr. M. Naveenkumar)', 'DS_Lab (Dr. S. Savitha [M], Mr. M. Namasivayam [A])', 'SSD-III (Dr. S. Vadivel)', 'JP_Lab (Dr. N. Mahendran [M], Mr. P. Vasuki [A])', 'JP (Ms. R. Keerthana)', 'JP (Ms. R. Keerthana)'],
      ['DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'COA (Mr. M. Naveenkumar)', 'OS (Mr. V. Ramesh)', 'DMS (Mr. Natarajan)', 'OS_Lab (Mr. V. Ramesh [M], Mrs. J. NirmalaGandhi [A])', 'DS (Mr. B. Rajesh)'],
      ['DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'SSD-III (Dr. S. Vadivel)', 'DS (Mr. B. Rajesh)', 'DS (Mr. B. Rajesh)', 'OS_Lab (Mr. V. Ramesh [M], Mrs. J. NirmalaGandhi [A])', 'Library Hour (Mr. Hari Prakash)'],
      ['DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'OS (Mr. V. Ramesh)', 'JP (Ms. R. Keerthana)', 'COA (Mr. M. Naveenkumar)', 'OS_Lab (Mr. V. Ramesh [M], Mrs. J. NirmalaGandhi [A])', 'OS (Mr. V. Ramesh)']
    ]
  },
  'III_SEM_D': {
    periods: [
      ['DS (Ms. M. Jayanthi)', 'COA (Mr. M. Naveenkumar)', 'COA (Mr. M. Naveenkumar)', 'OS (Mrs. J. NirmalaGandhi)', 'DS (Ms. M. Jayanthi)', 'DMS (Mr. Natarajan)'],
      ['MH (Dr. M. Venkatesan)', 'JP_Lab (Mr. P. Vasuki [M], Dr. N. Mahendran [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'OS (Mrs. J. NirmalaGandhi)', 'JP (Mrs. R. Vijhayalakshme)', 'SSD-III (Mr. M. Namasivayam)'],
      ['DMS (Mr. Natarajan)', 'JP_Lab (Mr. P. Vasuki [M], Dr. N. Mahendran [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'COA (Mr. M. Naveenkumar)', 'SSD-III (Mr. M. Namasivayam)', 'JP (Mrs. R. Vijhayalakshme)'],
      ['OS (Mrs. J. NirmalaGandhi)', 'JP_Lab (Mr. P. Vasuki [M], Dr. N. Mahendran [A])', 'DST_Lab (Mr. S. Ajithkumar [M], Ms. P. Priyadharshini [A])', 'DMS (Mr. Natarajan)', 'DMS (Mr. Natarajan)', 'COA (Mr. M. Naveenkumar)'],
      ['COA (Mr. M. Naveenkumar)', 'DS (Ms. M. Jayanthi)', 'DS_Lab (Mrs. M. K. Nivodhini [M], Dr. S. Savitha [A])', 'OS (Mrs. J. NirmalaGandhi)', 'OS_Lab (Mrs. S. Vinothini [M], Mr. O.K. Gowrishankar [A])', 'DS (Ms. M. Jayanthi)'],
      ['SSD-III (Mr. M. Namasivayam)', 'DMS (Mr. Natarajan)', 'DS_Lab (Mrs. M. K. Nivodhini [M], Dr. S. Savitha [A])', 'OS (Mrs. J. NirmalaGandhi)', 'OS_Lab (Mrs. S. Vinothini [M], Mr. O.K. Gowrishankar [A])', 'JP (Mrs. R. Vijhayalakshme)'],
      ['Library Hour (Dr. N. Mahendran)', 'JP (Mrs. R. Vijhayalakshme)', 'DS_Lab (Mrs. M. K. Nivodhini [M], Dr. S. Savitha [A])', 'DS (Ms. M. Jayanthi)', 'OS_Lab (Mrs. S. Vinothini [M], Mr. O.K. Gowrishankar [A])', 'JP (Mrs. R. Vijhayalakshme)']
    ]
  },
  'V_SEM_A': {
    periods: [
      ['ED (TBD)', 'CN (Ms. U. Kasthuri)', 'WP (Mrs. R. Vijhayalakshme)', 'OOAD (TBD)', 'PCD (Dr. V. Sharmila)', 'WP (Mrs. R. Vijhayalakshme)'],
      ['WP (Mrs. R. Vijhayalakshme)', 'PCD (Dr. V. Sharmila)', 'CN (Ms. U. Kasthuri)', 'CN (Ms. U. Kasthuri)', 'CN (Ms. U. Kasthuri)', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)'],
      ['CN (Ms. U. Kasthuri)', 'WP (Mrs. R. Vijhayalakshme)', 'PCD (Dr. V. Sharmila)', 'MH (Dr. M. Venkatesan)', 'WP (Mrs. R. Vijhayalakshme)', 'SSD-IV (Mr. Krishna Pradeep)'],
      ['PCD (Dr. V. Sharmila)', 'OOAD (TBD)', 'SSD-IV (Mr. Krishna Pradeep)', 'SSD-IV (Mr. Krishna Pradeep)', 'ED (TBD)', 'ED (TBD)'],
      ['CN_Lab (Ms. U. Kasthuri [M], Ms. U. Jayanthi [A])', 'SSD-IV (Mr. Krishna Pradeep)', '--- FREE ---', 'WP_Lab (Mrs. P. Vasuki [M], Mrs. E. Baby Anitha [A])', '--- FREE ---', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)'],
      ['CN_Lab (Ms. U. Kasthuri [M], Ms. U. Jayanthi [A])', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)', 'Library Hour (Mr. Krishna Pradeep)', 'WP_Lab (Mrs. P. Vasuki [M], Mrs. E. Baby Anitha [A])', '--- FREE ---', 'OOAD (TBD)'],
      ['CN_Lab (Ms. U. Kasthuri [M], Ms. U. Jayanthi [A])', 'ED (TBD)', 'OOAD (TBD)', 'WP_Lab (Mrs. P. Vasuki [M], Mrs. E. Baby Anitha [A])', 'OOAD (TBD)', 'PCD (Dr. V. Sharmila)']
    ]
  },
  'V_SEM_B': {
    periods: [
      ['--- FREE ---', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)', 'ED (TBD)', 'CN (Mr. B. Rajesh)', 'CN (Mr. B. Rajesh)', 'PCD (Dr. V. Sharmila)'],
      ['WP (Mrs. P. Vasuki)', 'CN_Lab (Mr. B. Rajesh [M], Ms. U. Jayanthi [A])', 'SSD-IV (Mr. Hari Prakash)', 'WP_Lab (Mrs. R. Vijhayalakshme [M], Mrs. P. Vasuki [A])', '--- FREE ---', 'WP (Mrs. P. Vasuki)'],
      ['PCD (Dr. V. Sharmila)', 'CN_Lab (Mr. B. Rajesh [M], Ms. U. Jayanthi [A])', '--- FREE ---', 'WP_Lab (Mrs. R. Vijhayalakshme [M], Mrs. P. Vasuki [A])', 'ED (TBD)', 'OOAD (TBD)'],
      ['SSD-IV (Mr. Hari Prakash)', 'CN_Lab (Mr. B. Rajesh [M], Ms. U. Jayanthi [A])', 'WP (Mrs. P. Vasuki)', 'WP_Lab (Mrs. R. Vijhayalakshme [M], Mrs. P. Vasuki [A])', 'OOAD (TBD)', 'ED (TBD)'],
      ['ED (TBD)', 'PCD (Dr. V. Sharmila)', 'CN (Mr. B. Rajesh)', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)', 'PCD (Dr. V. Sharmila)', 'SSD-IV (Mr. Hari Prakash)'],
      ['OOAD (TBD)', 'OOAD (TBD)', 'OOAD (TBD)', 'PCD (Dr. V. Sharmila)', 'MH (Mr. A. Rajkannan)', 'CN (Mr. B. Rajesh)'],
      ['CN (Mr. B. Rajesh)', 'WP (Mrs. P. Vasuki)', 'Library Hour (TBD)', 'SSD-IV (Mr. Hari Prakash)', 'WP (Mrs. P. Vasuki)', 'AI (Mr. M. Azhagesan) / OST (Mr. O.K. Gowrishankar)']
    ]
  }
};

export const generateTimetablePDF = (classCode, className, yearDept) => {
  const doc = new jsPDF('landscape', 'mm', 'a4');
  
  // Get timetable data
  const data = timetableData[classCode];
  if (!data) {
    console.error('No timetable data found for class:', classCode);
    return;
  }

  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('SKEDULER TIMETABLE', 105, 15, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(`Class: ${classCode}`, 20, 25);
  doc.text(`Department: ${className}`, 20, 30);
  doc.text(`Year: ${yearDept}`, 20, 35);
  
  // Date
  const currentDate = new Date().toLocaleDateString();
  doc.text(`Generated on: ${currentDate}`, 20, 40);

  // Prepare table data
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const tableData = [];
  
  // Add header row
  tableData.push(['Period', ...days]);
  
  // Add period rows
  data.periods.forEach((period, index) => {
    const row = [`Period ${index + 1}`, ...period];
    tableData.push(row);
  });

  // Generate table
  doc.autoTable({
    head: [tableData[0]],
    body: tableData.slice(1),
    startY: 50,
    styles: {
      fontSize: 8,
      cellPadding: 2,
      overflow: 'linebreak',
      halign: 'left',
      valign: 'middle'
    },
    headStyles: {
      fillColor: [30, 64, 175], // Blue color
      textColor: 255,
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252] // Light gray
    },
    columnStyles: {
      0: { halign: 'center', fontStyle: 'bold' } // Period column
    },
    margin: { left: 20, right: 20 }
  });

  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(`Page ${i} of ${pageCount}`, 20, doc.internal.pageSize.height - 10);
    doc.text('Generated by Skeduler System', doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 10);
  }

  // Download the PDF
  const fileName = `Timetable_${classCode}_${className}_${yearDept}.pdf`;
  doc.save(fileName);
};

export const generateAllTimetablesPDF = () => {
  const doc = new jsPDF('landscape', 'mm', 'a4');
  const classMappings = {
    'III_SEM_A': { name: 'CHE-DEPARTMENT', year: 'VI' },
    'III_SEM_B': { name: 'CSE-DEPARTMENT', year: 'VIII' },
    'III_SEM_C': { name: 'CSE-DEPARTMENT', year: 'VIII' },
    'III_SEM_D': { name: 'EEE-DEPARTMENT', year: 'VI' },
    'V_SEM_A': { name: 'EEE-DEPARTMENT', year: 'VIII' },
    'V_SEM_B': { name: 'CSE-DEPARTMENT', year: 'X' }
  };

  Object.keys(timetableData).forEach((classCode, index) => {
    if (index > 0) {
      doc.addPage();
    }

    const mapping = classMappings[classCode];
    const data = timetableData[classCode];

    // Header
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('SKEDULER TIMETABLE', 105, 15, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Class: ${classCode}`, 20, 25);
    doc.text(`Department: ${mapping.name}`, 20, 30);
    doc.text(`Year: ${mapping.year}`, 20, 35);

    // Prepare table data
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const tableData = [];
    
    // Add header row
    tableData.push(['Period', ...days]);
    
    // Add period rows
    data.periods.forEach((period, periodIndex) => {
      const row = [`Period ${periodIndex + 1}`, ...period];
      tableData.push(row);
    });

    // Generate table
    doc.autoTable({
      head: [tableData[0]],
      body: tableData.slice(1),
      startY: 45,
      styles: {
        fontSize: 7,
        cellPadding: 1.5,
        overflow: 'linebreak',
        halign: 'left',
        valign: 'middle'
      },
      headStyles: {
        fillColor: [30, 64, 175],
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      columnStyles: {
        0: { halign: 'center', fontStyle: 'bold' }
      },
      margin: { left: 20, right: 20 }
    });
  });

  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(`Page ${i} of ${pageCount}`, 20, doc.internal.pageSize.height - 10);
    doc.text('Generated by Skeduler System', doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 10);
  }

  // Download the PDF
  const fileName = `All_Timetables_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};