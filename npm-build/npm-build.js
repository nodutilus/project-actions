import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const scripts = JSON.parse(readFileSync('./package.json', 'utf-8')).scripts || {}

if ('build' in scripts) {
  console.log('npm run build')
  execSync('npm run build', {
    encoding: 'utf-8',
    stdio: ['inherit', 'inherit', 'inherit']
  })
}
