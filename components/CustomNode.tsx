import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'react-flow-renderer';
import { nodeTypes, indicatorOptions, conditionOptions, actionOptions, exitOptions } from '../lib/nodeTypes';

const CustomNode = ({ data, isConnectable }: NodeProps) => {
  const { label, type } = data;
  const { icon: Icon, color, borderColor } = nodeTypes[type];

  const renderNodeContent = () => {
    switch (type) {
      case 'asset':
        return (
          <input
            type="text"
            placeholder="Enter stock symbol"
            className="mt-2 p-1 w-full text-sm border rounded"
            onChange={(e) => console.log('Asset symbol:', e.target.value)}
          />
        );
      case 'indicator':
        return (
          <select
            className="mt-2 p-1 w-full text-sm border rounded"
            onChange={(e) => console.log('Selected indicator:', e.target.value)}
          >
            <option value="">Select an indicator</option>
            {indicatorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'condition':
        return (
          <select
            className="mt-2 p-1 w-full text-sm border rounded"
            onChange={(e) => console.log('Selected condition:', e.target.value)}
          >
            <option value="">Select a condition</option>
            {conditionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'action':
        return (
          <select
            className="mt-2 p-1 w-full text-sm border rounded"
            onChange={(e) => console.log('Selected action:', e.target.value)}
          >
            <option value="">Select an action</option>
            {actionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'exit':
        return (
          <select
            className="mt-2 p-1 w-full text-sm border rounded"
            onChange={(e) => console.log('Selected exit strategy:', e.target.value)}
          >
            <option value="">Select exit strategy</option>
            {exitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${color} ${borderColor} border-2`}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className={`w-3 h-3 ${type === 'asset' ? 'hidden' : ''}`}
      />
      <div className="flex items-center">
        <Icon className="mr-2" size={24} />
        <div className="text-sm font-medium">{label}</div>
      </div>
      {renderNodeContent()}
      {type !== 'exit' && (
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
          className="w-3 h-3"
        />
      )}
    </div>
  );
};

export default memo(CustomNode);