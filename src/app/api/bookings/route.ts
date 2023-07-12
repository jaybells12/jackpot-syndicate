import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  //Find the absolute path of the json directory
  console.log('Handler Reached')
  const jsonDirectory = path.join(process.cwd(), 'json')

  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/bookings.json',
    'utf8'
  )

  const jsonData = JSON.parse(fileContents)

  return NextResponse.json(jsonData)
}
