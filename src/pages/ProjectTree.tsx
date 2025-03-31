import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { ChevronRight, ExpandMore } from '@mui/icons-material';

interface TreeNode {
  name: string;
  children?: TreeNode[];
  startDate?: string;
  endDate?: string;
  level?: string;
}

const treeData: TreeNode = {
  name: 'P01. Проект 1',
  level: 'Проект',
  startDate: '2024-02-01',
  endDate: '2030-07-10',
  children: [
    {
      name: 'P01.01. Шахта 1',
      level: 'Направление',
      startDate: '2024-09-11',
      endDate: '2030-07-10',
    },
    {
      name: 'P01.02. Направление 2',
      level: 'Направление',
      startDate: '2024-02-01',
      endDate: '2027-12-12',
      children: [
        {
          name: 'P01.02.01. Объект 2',
          level: 'Объект',
          startDate: '2024-02-01',
          endDate: '2027-12-12',
          children: [
            {
              name: 'P01.02.01.01. Система 2',
              level: 'Система',
              startDate: '2024-02-01',
              endDate: '2027-12-12',
              children: [
                {
                  name: 'P01.02.01.01.01. Пакет работ 3',
                  level: 'Пакет работ',
                  startDate: '2024-12-14',
                  endDate: '2026-10-24',
                },
                {
                  name: 'P01.02.01.01.02. Пакет работ 2',
                  level: 'Пакет работ',
                  startDate: '2024-10-14',
                  endDate: '2024-10-30',
                },
                {
                  name: 'P01.02.01.01.03. Пакет работ 12',
                  level: 'Пакет работ',
                  startDate: '2024-02-01',
                  endDate: '2024-07-09',
                },
                {
                  name: 'P01.02.01.01.04. Пакет работ 45',
                  level: 'Пакет работ',
                  startDate: '2024-11-04',
                  endDate: '2024-11-19',
                },
                {
                  name: 'P01.02.01.01.05. Пакет работ 24',
                  level: 'Пакет работ',
                  startDate: '2025-01-15',
                  endDate: '2025-01-30',
                },
                {
                  name: 'P01.02.01.01.PS. to_test',
                  level: 'Пакет работ',
                  startDate: '2025-12-12',
                  endDate: '2027-11-12',
                },
                {
                  name: 'P01.02.01.01.QS. lost144',
                  level: 'Пакет работ',
                  startDate: '2025-12-12',
                  endDate: '2027-12-12',
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

interface FlattenedNode extends TreeNode {
  id: string;
  depth: number;
  hasChildren: boolean;
}

const LEVEL_INDENTATION: { [key: string]: number } = {
  'Проект': 0,
  'Направление': 1,
  'Объект': 2,
  'Система': 3,
  'Пакет работ': 4
};

const ProjectTree: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(['0']));

  const flattenTree = (node: TreeNode, parentId: string = '', depth: number = 0): FlattenedNode[] => {
    const currentId = parentId ? `${parentId}-${depth}` : '0';
    const flattened: FlattenedNode[] = [{
      ...node,
      id: currentId,
      depth,
      hasChildren: Boolean(node.children?.length)
    }];

    if (node.children && expandedRows.has(currentId)) {
      node.children.forEach((child, index) => {
        flattened.push(...flattenTree(child, currentId, index));
      });
    }

    return flattened;
  };

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (expandedRows.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const flattenedData = flattenTree(treeData);

  return (
    <div style={{ padding: '20px' }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: 'calc(100vh - 140px)' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Наименование</TableCell>
                <TableCell>Уровень</TableCell>
                <TableCell>Дата начала</TableCell>
                <TableCell>Дата окончания</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flattenedData.map((node) => (
                <TableRow 
                  key={node.id}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      paddingLeft: `${(node.level ? LEVEL_INDENTATION[node.level] : 0) * 32}px`
                    }}>
                      {node.hasChildren && (
                        <IconButton
                          size="small"
                          onClick={() => toggleRow(node.id)}
                        >
                          {expandedRows.has(node.id) ? <ExpandMore /> : <ChevronRight />}
                        </IconButton>
                      )}
                      {!node.hasChildren && <span style={{ width: 26 }} />}
                      {node.name}
                    </div>
                  </TableCell>
                  <TableCell>{node.level}</TableCell>
                  <TableCell>{node.startDate}</TableCell>
                  <TableCell>{node.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ProjectTree; 