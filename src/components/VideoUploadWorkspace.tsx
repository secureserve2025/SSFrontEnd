import React, { useState, useRef, useCallback } from 'react';
import { Upload, Play, CheckCircle, AlertCircle, X, Download, Eye, Wand2, Clock, FileVideo, Volume2, ChevronDown } from 'lucide-react';

interface VideoUploadWorkspaceProps {
  userType: 'freelancer' | 'client';
  projectId: string;
  onUploadComplete?: (fileData: any) => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  thumbnail?: string;
  uploadProgress: number;
  status: 'uploading' | 'completed' | 'error';
}

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  aiSuggestion?: string;
}

const VideoUploadWorkspace: React.FC<VideoUploadWorkspaceProps> = ({ 
  userType, 
  projectId, 
  onUploadComplete 
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: 'format',
      label: 'Video format matches agreed spec (e.g., MP4/1080p)',
      description: 'Verify the video format and resolution meet specifications',
      checked: false,
      aiSuggestion: 'Check if video is in MP4 format with 1080p resolution'
    },
    {
      id: 'duration',
      label: 'Duration as required (e.g., 60s)',
      description: 'Confirm the video length meets the agreed duration',
      checked: false,
      aiSuggestion: 'Verify video duration matches the agreed timeline (e.g., 60 seconds)'
    },
    {
      id: 'watermark',
      label: 'No visible watermark',
      description: 'Ensure no unauthorized watermarks are present in the video',
      checked: false,
      aiSuggestion: 'Scan for any visible watermarks or logos that weren\'t requested'
    },
    {
      id: 'audio',
      label: 'Audio is clear and synchronized',
      description: 'Verify audio quality and synchronization with video',
      checked: false,
      aiSuggestion: 'Listen for clear audio without distortion and proper synchronization'
    },
    {
      id: 'content',
      label: 'Content meets all described requirements',
      description: 'Confirm all project requirements and specifications are met',
      checked: false,
      aiSuggestion: 'Review against original project brief and requirements document'
    },
    {
      id: 'edits',
      label: 'All requested edits delivered',
      description: 'Verify all revision requests and feedback have been addressed',
      checked: false,
      aiSuggestion: 'Cross-check with any revision notes or feedback provided'
    }
  ]);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0);

  const supportedFormats = ['video/mp4', 'video/mov'];
  const maxFileSize = 500 * 1024 * 1024; // 500MB

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current++;
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragOver(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    dragCounterRef.current = 0;
    
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFileUpload(files);
    }
  };

  const handleFileUpload = (files: File[]) => {
    files.forEach(file => {
      // Validate file type
      if (!supportedFormats.includes(file.type)) {
        alert(`Unsupported file format: ${file.type}. Please upload MP4, MOV, AVI, or MKV files.`);
        return;
      }

      // Validate file size
      if (file.size > maxFileSize) {
        alert(`File too large: ${file.name}. Maximum size is 500MB.`);
        return;
      }

      const fileId = Date.now() + Math.random().toString();
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        uploadProgress: 0,
        status: 'uploading'
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, uploadProgress: Math.min(f.uploadProgress + 10, 100) }
              : f
          )
        );
      }, 200);

      // Complete upload after 3 seconds
      setTimeout(() => {
        clearInterval(interval);
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { 
                  ...f, 
                  uploadProgress: 100, 
                  status: 'completed',
                  thumbnail: f.url // In real app, generate actual thumbnail
                }
              : f
          )
        );
        
        if (onUploadComplete) {
          onUploadComplete(newFile);
        }
      }, 3000);
    });
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleChecklistChange = (itemId: string, checked: boolean) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, checked } : item
      )
    );
  };

  const generateAISuggestions = async () => {
    setIsGeneratingAI(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setShowAISuggestions(true);
      setIsGeneratingAI(false);
    }, 2000);
  };

  const allChecklistCompleted = checklist.every(item => item.checked);
  const completedCount = checklist.filter(item => item.checked).length;

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">
          {userType === 'freelancer' ? 'Upload Your Deliverable' : 'Review Uploaded Work'}
        </h3>
        
        {userType === 'freelancer' && (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              isDragOver
                ? 'border-purple-400 bg-purple-900/20'
                : 'border-gray-600 hover:border-gray-500'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Upload className={`mx-auto h-12 w-12 mb-4 transition-colors ${
              isDragOver ? 'text-purple-400' : 'text-gray-400'
            }`} />
            <p className={`text-lg font-medium mb-2 transition-colors ${
              isDragOver ? 'text-purple-400' : 'text-gray-300'
            }`}>
              {isDragOver ? 'Drop your video here' : 'Upload your deliverable video here'}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Upload your deliverable video here. Supported formats: MP4, MOV. Max size: 500MB.
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              Choose File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".mp4,.mov"
              onChange={handleFileSelect}
              className="hidden"
              multiple
            />
          </div>
        )}

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-medium text-white">Uploaded Files</h4>
            {uploadedFiles.map((file) => (
              <div key={file.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {file.status === 'completed' ? (
                      <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                        <FileVideo className="h-8 w-8 text-purple-400" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                        <div className="animate-spin w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{file.name}</p>
                    <p className="text-gray-400 text-sm">{formatFileSize(file.size)}</p>
                    
                    {file.status === 'uploading' && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${file.uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Uploading... {file.uploadProgress}%
                        </p>
                      </div>
                    )}
                    
                    {file.status === 'completed' && (
                      <div className="flex items-center space-x-2 mt-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 text-sm">Upload complete</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {file.status === 'completed' && (
                      <>
                        <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-600">
                          <Play className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-600">
                          <Download className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    <button 
                      onClick={() => removeFile(file.id)}
                      className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-900/20"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Client Approval Checklist */}
      {userType === 'client' && uploadedFiles.some(f => f.status === 'completed') && (
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Client Approval Checklist: Please confirm the following before releasing payment
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-400">
                {completedCount}/{checklist.length}
              </div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
          </div>

          {/* Show Checklist Button */}
          <div className="mb-4">
            <button
              onClick={() => setShowChecklist(!showChecklist)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              <span>{showChecklist ? 'Hide Checklist' : 'Show Checklist'}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showChecklist ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Collapsible Checklist */}
          {showChecklist && (
            <div className="space-y-4 mb-6">
              {/* AI Suggestions Button */}
              <div className="mb-4">
                <button
                  onClick={generateAISuggestions}
                  disabled={isGeneratingAI}
                  className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                >
                  {isGeneratingAI ? (
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <Wand2 className="h-4 w-4" />
                  )}
                  <span>
                    {isGeneratingAI ? 'Generating...' : 'Get suggestions for review criteria'}
                  </span>
                </button>
              </div>

              {/* Checklist Items */}
              {checklist.map((item) => (
                <div key={item.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id={item.id}
                      checked={item.checked}
                      onChange={(e) => handleChecklistChange(item.id, e.target.checked)}
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
                    />
                    <div className="flex-1">
                      <label htmlFor={item.id} className="text-white font-medium cursor-pointer">
                        {item.label}
                      </label>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                      
                      {showAISuggestions && item.aiSuggestion && (
                        <div className="mt-2 p-3 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Wand2 className="h-4 w-4 text-cyan-400" />
                            <span className="text-cyan-400 text-sm font-medium">AI Suggestion</span>
                          </div>
                          <p className="text-cyan-300 text-sm">{item.aiSuggestion}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm">Review Progress</span>
              <span className="text-gray-300 text-sm">
                {Math.round((completedCount / checklist.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / checklist.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              disabled={!allChecklistCompleted}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                allChecklistCompleted
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {allChecklistCompleted ? 'Approve & Release Payment' : 'Complete Review to Approve'}
            </button>
            <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
              Request Revision
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoUploadWorkspace;