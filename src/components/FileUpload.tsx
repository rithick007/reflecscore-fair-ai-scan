
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  accept: string;
  id: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileChange, 
  accept, 
  id,
  className
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      const fileType = droppedFile.type;
      const acceptedTypes = accept.split(',').map(type => type.trim());
      
      if (
        acceptedTypes.includes(fileType) || 
        acceptedTypes.some(type => {
          return type.includes('*') && 
            fileType.startsWith(type.replace('*', ''));
        })
      ) {
        setFile(droppedFile);
        onFileChange(droppedFile);
      } else {
        // Show an error that the file type is not accepted
        console.error("File type not accepted");
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    onFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div 
      className={cn(className)}
      variants={fadeInUp}
    >
      <input
        type="file"
        id={id}
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />

      {!file ? (
        <div
          className={cn(
            "neumorphic h-40 flex flex-col items-center justify-center cursor-pointer p-6 transition-all",
            {
              "border-2 border-dashed border-electricBlue": isDragging,
            }
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-sm text-gray-600 text-center">
            Drag & drop your file here, or <span className="text-electricBlue font-medium">browse</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: {accept}
          </p>
        </div>
      ) : (
        <div className="neumorphic p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 mr-3 rounded-lg bg-electricBlue/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-electricBlue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 truncate max-w-[200px] md:max-w-xs">
                {file.name}
              </p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove file"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default FileUpload;
