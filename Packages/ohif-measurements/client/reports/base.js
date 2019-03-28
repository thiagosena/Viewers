import jsPDF from 'jspdf';
import { _ } from 'meteor/underscore';

export class BaseReport {
    constructor(options) {
        const defaultOptions = {
            width: 595.28,
            height: 841.89,
            marginTop: 30,
            marginLeft: 40,
            marginRight: 40,
            marginBottom: 30,
            showPageNumber: true
        };

        this.options = _.extend(defaultOptions, options);
        this.init();
    }

    init() {
        this.doc = new jsPDF('portrait', 'pt', [this.options.width, this.options.height]);
        this.options.width = Math.floor(this.options.width);
        this.options.height = Math.floor(this.options.height);
        this.currentPage = 1;
        this.printStatic();
    }

    printStatic() {
        this.x = this.options.marginLeft;
        this.y = this.options.marginTop;
        this.printHeader();
        if (this.options.showPageNumber) {
            this.printPageNumber();
        }
    }

    newPage() {
        this.doc.addPage();
        this.currentPage++;
        this.printStatic();
    }

    printHeader() {
        const { marginLeft, marginRight, width } = this.options;
        const doc = this.doc;
        let y = this.y;

        // Print the logo strokes
        doc.setDrawColor(0).setLineWidth(1);
        // doc.roundedRect(marginLeft + 0.5, y + 0.5, 8, 8, 0.5, 0.5, 'D');
        // doc.roundedRect(marginLeft + 11, y + 0.5, 8, 8, 0.5, 0.5, 'D');
        // doc.roundedRect(marginLeft + 0.5, y + 11, 8, 8, 0.5, 0.5, 'D');
        // doc.roundedRect(marginLeft + 11, y + 11, 8, 8, 0.5, 0.5, 'D');

        var imgData = 'data:image/png;base64,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';
        doc.addImage(imgData, 'png', marginLeft + 0.5, 20, 130, 30);

        // Print the logo text
        // doc.setFont('Serif').setFontSize(16).setFontStyle('normal').setTextColor(0);
        // doc.text('Nuclearis', 66, y + 14);
        y += 24;

        // Print header horizontal line
        doc.setDrawColor(0).setLineWidth(0.5);
        doc.line(marginLeft, y, width - marginRight, y);
        y += 1;

        this.y = y;
    }

    printPageNumber() {
        const doc = this.doc;
        const { marginBottom, marginRight, width, height } = this.options;
        doc.setFont('Verdana');
        doc.setFontSize(8);
        doc.setFontStyle('normal');
        doc.setTextColor(0);
        const text = `PAGE ${this.currentPage}`;
        const size = doc.getTextDimensions(text);
        doc.text(text, width - marginRight - size.w, height - marginBottom + (size.h / 2));
    }

    save(fileName) {
        this.doc.save(fileName || 'report.pdf');
    }
}
