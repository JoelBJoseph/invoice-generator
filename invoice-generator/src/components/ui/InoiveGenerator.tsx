'use client';

import React from 'react';
import { jsPDF } from 'jspdf';

interface InvoiceGeneratorProps {
    logoUrl: string;
}

const InvoiceGenerator: React.FC<InvoiceGeneratorProps> = ({ logoUrl }) => {
    const generatePDF = async () => {
        const doc = new jsPDF();

        const img = new Image();
        img.src = logoUrl;
        img.onload = () => {
            doc.addImage(img, 'PNG', 10, 10, 30, 30); // Adjust the dimensions and position as needed

            // Add the header text
            doc.setFontSize(18);
            doc.text('AKSHAYA E CENTER', 50, 20);
            doc.setFontSize(10);
            doc.text('IDK009 ANACHAL', 50, 25);
            doc.text('Kolath Building, Anachal, Chithirapuram P O Email: akshayaanachal009@gmail.com', 50, 30);
            doc.text('Contact: 0486526323', 50, 35);

            // Add the date
            doc.text('Date: 01-06-2024', 150, 35);

            // Add the customer name
            doc.text('Customer Name:', 10, 50);
            doc.text('JERIN JOHNY', 50, 50);

            // Add table header
            doc.setFillColor(173, 216, 230); // Light blue background color
            doc.rect(10, 60, 190, 10, 'F');
            doc.setFontSize(12);
            doc.setTextColor(255, 255, 255); // White text color
            doc.text('Invoice Id', 12, 67);
            doc.text('Service Name', 60, 67);
            doc.text('Total', 160, 67);

            // Add table content
            doc.setTextColor(0, 0, 0); // Black text color
            doc.text('24546', 12, 77);
            doc.text('Encumbrance Certificate 310', 60, 77);
            doc.text('420.0', 160, 77);

            // Add operator name
            doc.text('Operator Name', 12, 110);
            doc.text('admin', 60, 110);

            // Save the PDF
            doc.save('invoice.pdf');
        };
    };

    return (
        <div>
            <button onClick={generatePDF} className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Download Invoice
            </button>
        </div>
    );
};

export default InvoiceGenerator;
