import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { saveAs } from 'file-saver';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function ContractEditor() {
  const editorRef = React.createRef();
  const [title, setTitle] = useState('');

  const handlePdfExport = () => {
    const content = editorRef.current.getInstance().getMarkdown();
    const docDefinition = {
      content: [
        { text: title, style: 'header' },
        { text: content, style: 'body' },
      ],
      styles: {
        header: { fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
        body: { fontSize: 12 },
      },
    };
    pdfMake.createPdf(docDefinition).download(`${title || 'contract'}.pdf`);
  };

  return (
    <div>
      <h1>Contract Editor</h1>
      <input
        type="text"
        placeholder="Contract Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <Editor
        initialValue="Start writing your contract here..."
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
      />
      <button onClick={handlePdfExport}>Export to PDF</button>
    </div>
  );
}

export default ContractEditor;
