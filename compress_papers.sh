#!/bin/bash

# Source directory
SOURCE_DIR="~/Obsidian/Papers"

# Destination directory for backups
DEST_DIR="~/Work/Papers raw"

# Index file to keep track of processed files
INDEX_FILE="$DEST_DIR/processed.txt"

# Ghostscript command
GS_COMMAND="gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \
   -dDownsampleColorImages=true -dColorImageResolution=300 \
   -dDownsampleGrayImages=true -dGrayImageResolution=300 \
   -dDownsampleMonoImages=true -dMonoImageResolution=600 \
   -dAutoFilterColorImages=false -dColorImageFilter=/DCTEncode \
   -dAutoFilterGrayImages=false -dGrayImageFilter=/DCTEncode \
   -dNOPAUSE -dBATCH"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Create index file if it doesn't exist
touch "$INDEX_FILE"

# Function to check if a file has been processed
is_processed() {
  local file="$1"
  grep -q "$file" "$INDEX_FILE"
}

# Process each PDF file in the source directory
find "$SOURCE_DIR" -name "*.pdf" -print0 | while IFS= read -r -d $'\0' file; do
  filename=$(basename "$file")

  # Check if the file has already been processed
  if is_processed "$filename"; then
    echo "Skipping already processed file: $filename"
    continue
  fi

  # Create backup path
  backup_file="$DEST_DIR/$filename"

  # Backup the file
  cp "$file" "$backup_file"
  echo "Backed up: $filename to $backup_file"

  # Compress the PDF
  output_file="$file"
  temp_file="$SOURCE_DIR/res.pdf"

  $GS_COMMAND -sOutputFile="$temp_file" "$file"

  # Replace the original file with the compressed one
  mv "$temp_file" "$output_file"

  echo "Compressed: $filename"

  # Add the file to the index
  echo "$filename" >> "$INDEX_FILE"
  echo "Indexed: $filename"
done

echo "Finished processing PDF files."
