'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
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
            doc.text('Customer Name: ', 10, 50);
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

const DialogDemo: React.FC = () => {
    const logoUrl = '/path-to-your-logo.png'; // Ensure this path is correct

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    Generate Invoice
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Invoice Generator
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        Generate and download your invoice by clicking the button below.
                    </Dialog.Description>
                    <InvoiceGenerator logoUrl={logoUrl} />
                    <Dialog.Close asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DialogDemo;
