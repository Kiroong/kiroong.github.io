#!/bin/bash

# CV LaTeX Compile Script for macOS
# Usage: ./compile.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CV_DIR="$(dirname "$SCRIPT_DIR")"
SRC_DIR="$CV_DIR/src"
OUTPUT_DIR="$CV_DIR/output"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check if pdflatex is available
if ! command -v pdflatex &> /dev/null; then
    echo "Error: pdflatex not found."
    echo "Please install MacTeX or BasicTeX:"
    echo "  brew install --cask mactex"
    echo "  or"
    echo "  brew install --cask basictex"
    exit 1
fi

echo "Compiling CV..."

# Change to src directory (res.cls must be in same directory as .tex file)
cd "$SRC_DIR"

# Compile with pdflatex (run twice for references)
pdflatex -output-directory="$OUTPUT_DIR" cv_2.tex
pdflatex -output-directory="$OUTPUT_DIR" cv_2.tex

# Clean up auxiliary files
rm -f "$OUTPUT_DIR"/*.aux "$OUTPUT_DIR"/*.log "$OUTPUT_DIR"/*.out

echo "Done! Output: $OUTPUT_DIR/cv_2.pdf"
