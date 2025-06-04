import fs from 'fs';
import path from 'path';

export const handler = async () => {
  const filePath = path.resolve('db.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileData);

  return {
    statusCode: 200,
    body: JSON.stringify(data.sideBar)
  };
};
