#!/bin/bash
#
# SCRIPT: test
# AUTHOR: Tang Cheng
# DATE:   2017/07/17
# REV:    1.0.D (Valid are A, B, D, T, Q, and P)
#               (For Alpha, Beta, Dev, Test, QA, and Production)
#
# PLATFORM: Linux
#
# PURPOSE: Run python nose test cases.
#
#
# set -n   # Uncomment to check script syntax, without execution.
#          # NOTE: Do not forget to put the # comment back in or
#          #       the shell script will never execute!
# set -x   # Uncomment to debug this shell script
#
##########################################################
#         DEFINE FILES AND VARIABLES HERE
##########################################################

this_script=$(basename $0)
top_dir=$(dirname $0)"/../../"
echo -e "$top_dir"

##########################################################
#              DEFINE FUNCTIONS HERE
##########################################################

##########################################################
#               BEGINNING OF MAIN
##########################################################

pushd $top_dir

app_name=$(basename $(pwd))
docker_image_id=`echo "local/${app_name}:latest" | tr "[:upper:]" "[:lower:]"`

docker tag $docker_image_id docker.retail.com/retail/retail_frontend
docker push docker.retail.com/retail/retail_frontend

#popd

# End of script