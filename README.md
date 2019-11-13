# aws-appsync-bookstore



## Setup

* NYT Dev API Key: 
  * https://developer.nytimes.com/get-started
  * Create new app ("appsync-bookstore")
  * Enable "Books API"
  * Generate App ID and key  




``` json
"BookRatingFieldResolver": {
      "Type": "AWS::AppSync::Resolver",
      "Properties": {
        "ApiId": { "Ref": "AppSyncApiId" },
        "DataSourceName": { "Fn::GetAtt" : [ "GoodReadsDataSource", "Name" ] },
        "TypeName": "Book",
        "FieldName": "rating",
        "RequestMappingTemplateS3Location": {
          "Fn::Sub": [
            "s3://${S3DeploymentBucket}/${S3DeploymentRootKey}/resolvers/Book.rating.req.vtl",
            {
              "S3DeploymentBucket": {
                "Ref": "S3DeploymentBucket"
              },
              "S3DeploymentRootKey": {
                "Ref": "S3DeploymentRootKey"
              }
            }
          ]
        },
        "ResponseMappingTemplateS3Location": {
          "Fn::Sub": [
            "s3://${S3DeploymentBucket}/${S3DeploymentRootKey}/resolvers/Book.rating.res.vtl",
            {
              "S3DeploymentBucket": {
                "Ref": "S3DeploymentBucket"
              },
              "S3DeploymentRootKey": {
                "Ref": "S3DeploymentRootKey"
              }
            }
          ]
        }
      }
    }
```