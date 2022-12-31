import fs     from 'fs';
// import member   from 'member';
import member from 'kelas2A';

let absen,
    kelompok,
    mhasiswa;

for (i = 0; i < kelompok; i++) {
  do    {absen = Math.random(0)*100;} 
  while (absen > klm.length);

  absen = Math.floor(absen);
  mhasiswa--;
  if (mhasiswa == 0) mhasiswa = fix.length;
}

const readWrite = (path,nama) => {
  const oldData = fs.readFileSync(`${path}.json`, 'utf-8');
  const newData = JSON.parse(oldData);
  const tmpData = {nama};

  newData.push(tmpData);

  fs.writeFileSync('./randomized.json', JSON.stringify(newData));
}