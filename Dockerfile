FROM public.ecr.aws/lambda/nodejs:18

COPY index.js ${LAMBDA_TASK_ROOT}
COPY package.json ${LAMBDA_TASK_ROOT}
  
CMD [ "index.handler" ]