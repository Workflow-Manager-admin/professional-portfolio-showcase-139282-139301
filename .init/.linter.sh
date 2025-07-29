#!/bin/bash
cd /home/kavia/workspace/code-generation/professional-portfolio-showcase-139282-139301/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

