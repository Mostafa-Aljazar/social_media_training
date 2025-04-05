'use client';

import { UploadButton } from '@/utility/uploadthing';

export default function uploadthing_Component() {
  return (
    <UploadButton
      endpoint='mediaUploader'
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log('🚀 ~ Files ~ res:', res[0].ufsUrl);
        alert('Upload Completed');
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
