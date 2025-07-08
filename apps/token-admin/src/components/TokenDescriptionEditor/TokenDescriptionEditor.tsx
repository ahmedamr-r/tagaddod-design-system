'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TokenDescriptionEditorProps {
  value?: string;
  onChange: (description: string) => void;
  placeholder?: string;
  tokenName?: string;
  tokenType?: string;
  maxLength?: number;
  className?: string;
}

const TokenDescriptionEditor: React.FC<TokenDescriptionEditorProps> = ({
  value = '',
  onChange,
  placeholder = 'Add a description for this token...',
  tokenName,
  tokenType,
  maxLength = 500,
  className = ''
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [showPreview, setShowPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(localValue.length, localValue.length);
    }
  }, [isEditing, localValue.length]);
  
  const handleSave = () => {
    onChange(localValue);
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setLocalValue(value);
    setIsEditing(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };
  
  const insertTextAtCursor = (text: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = localValue.substring(0, start) + text + localValue.substring(end);
    
    setLocalValue(newValue);
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.setSelectionRange(start + text.length, start + text.length);
      textarea.focus();
    }, 0);
  };
  
  const formatText = (format: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = localValue.substring(start, end);
    
    let formattedText = '';
    
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'code':
        formattedText = `\`${selectedText}\``;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        break;
    }
    
    const newValue = localValue.substring(0, start) + formattedText + localValue.substring(end);
    setLocalValue(newValue);
    
    // Set cursor position
    setTimeout(() => {
      const cursorPos = start + formattedText.length;
      textarea.setSelectionRange(cursorPos, cursorPos);
      textarea.focus();
    }, 0);
  };
  
  const renderMarkdown = (text: string) => {
    // Simple markdown rendering for preview
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
  };
  
  const getSuggestions = () => {
    const suggestions = [
      'Used for primary text content',
      'Main background color for surfaces',
      'Primary brand color for buttons and links',
      'Hover state for interactive elements',
      'Active/pressed state for buttons',
      'Disabled state styling',
      'Success feedback color',
      'Error/critical feedback color',
      'Warning feedback color',
      'Information feedback color',
      'Default spacing between elements',
      'Large spacing for section separation',
      'Small spacing for compact layouts',
      'Standard border radius for elements',
      'Button border radius',
      'Card border radius',
      'Primary font family for body text',
      'Heading font family',
      'Monospace font for code',
      'Base font size for body text',
      'Large font size for headings',
      'Small font size for captions'
    ];
    
    return suggestions.filter(suggestion => 
      tokenName ? suggestion.toLowerCase().includes(tokenName.toLowerCase()) : true
    ).slice(0, 5);
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-gray-900">Description</h4>
          {tokenName && (
            <span className="text-xs text-gray-500">for {tokenName}</span>
          )}
          {tokenType && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              {tokenType}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {isEditing && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="text-xs text-gray-600 hover:text-gray-800"
            >
              {showPreview ? 'Edit' : 'Preview'}
            </button>
          )}
          
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              {value ? 'Edit' : 'Add description'}
            </button>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3">
        {!isEditing ? (
          // Display mode
          <div className="min-h-[60px]">
            {value ? (
              <div 
                className="text-sm text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
              />
            ) : (
              <div className="text-sm text-gray-400 italic">
                {placeholder}
              </div>
            )}
          </div>
        ) : (
          // Editing mode
          <div className="space-y-3">
            {!showPreview && (
              <>
                {/* Formatting toolbar */}
                <div className="flex items-center gap-1 p-2 bg-gray-50 rounded border">
                  <button
                    onClick={() => formatText('bold')}
                    className="px-2 py-1 text-xs font-bold text-gray-600 hover:bg-gray-200 rounded"
                    title="Bold (Ctrl+B)"
                  >
                    B
                  </button>
                  <button
                    onClick={() => formatText('italic')}
                    className="px-2 py-1 text-xs italic text-gray-600 hover:bg-gray-200 rounded"
                    title="Italic (Ctrl+I)"
                  >
                    I
                  </button>
                  <button
                    onClick={() => formatText('code')}
                    className="px-2 py-1 text-xs font-mono text-gray-600 hover:bg-gray-200 rounded"
                    title="Inline code"
                  >
                    {'</>'}
                  </button>
                  <button
                    onClick={() => formatText('link')}
                    className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 rounded"
                    title="Link"
                  >
                    🔗
                  </button>
                  
                  <div className="mx-2 h-4 border-l border-gray-300" />
                  
                  <div className="text-xs text-gray-500">
                    {localValue.length}/{maxLength}
                  </div>
                </div>
                
                {/* Text area */}
                <textarea
                  ref={textareaRef}
                  value={localValue}
                  onChange={(e) => setLocalValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  className="w-full h-24 p-3 text-sm border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                {/* Suggestions */}
                {getSuggestions().length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-700">Suggestions:</div>
                    <div className="flex flex-wrap gap-1">
                      {getSuggestions().map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setLocalValue(suggestion)}
                          className="px-2 py-1 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            
            {/* Preview mode */}
            {showPreview && (
              <div className="min-h-[60px] p-3 bg-gray-50 rounded border">
                <div className="text-xs text-gray-500 mb-2">Preview:</div>
                <div 
                  className="text-sm text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(localValue) }}
                />
              </div>
            )}
            
            {/* Action buttons */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                Ctrl+Enter to save, Esc to cancel
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1 text-xs text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Help text */}
      {isEditing && !showPreview && (
        <div className="px-3 pb-3">
          <div className="text-xs text-gray-500">
            Supports **bold**, *italic*, `code`, and [links](url). This description will be included as CSS comments.
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenDescriptionEditor;